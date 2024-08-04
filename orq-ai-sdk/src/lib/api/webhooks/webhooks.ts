import { createHmac, timingSafeEqual } from "node:crypto";
import type { WebhookEvent } from "../../models";

export class Webhooks {
	#generateSignature(payload: WebhookEvent, secret: string) {
		const DIGEST_ALGORITHM = "sha256";
		return createHmac(DIGEST_ALGORITHM, secret)
			.update(
				JSON.stringify({
					id: payload.id,
					created: payload.created,
					type: payload.type,
				}),
			)
			.digest("hex");
	}

	/**
	 * Constructs an event from the provided payload, signature, and secret.
	 *
	 * @param payload - The payload of the webhook event.
	 * @param signature - The signature of the webhook event.
	 * @param secret - The secret used to generate the signature.
	 * @returns The constructed event.
	 * @throws Error if the webhook signature verification fails.
	 */
	construct_event(payload: WebhookEvent, signature: string, secret: string) {
		const expectedSignature = this.#generateSignature(payload, secret);

		const equal = timingSafeEqual(
			Buffer.from(signature, "utf-8"),
			Buffer.from(expectedSignature, "utf-8"),
		);

		if (!equal) {
			throw new Error("Error verifying webhook signature");
		}

		return payload;
	}
}
