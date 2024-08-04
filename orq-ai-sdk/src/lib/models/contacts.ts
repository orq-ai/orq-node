export interface Contact {
	id: string;
	external_id: string;
	display_name?: string | null;
	email?: string | null;
	avatar_url?: string | null;
	metadata: Record<string, unknown>;
}
