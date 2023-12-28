import { extractSSEData } from './';

describe('extractSSEData', () => {
  it('should return an empty string when input is empty', () => {
    const input = '';
    const result = extractSSEData(input);
    expect(result).toEqual('');
  });

  it('should return the same string when there are no SSE data prefixes', () => {
    const input = 'Hello\n\nWorld';
    const result = extractSSEData(input);
    expect(result).toEqual('HelloWorld');
  });

  it('should remove "data: " prefixes and join the entries', () => {
    const input = 'data: Hello\n\ndata: World';
    const result = extractSSEData(input);
    expect(result).toEqual('HelloWorld');
  });

  it('should trim the entries', () => {
    const input = 'data:   Hello  \n\ndata:   World  ';
    const result = extractSSEData(input);
    expect(result).toEqual('HelloWorld');
  });
});
