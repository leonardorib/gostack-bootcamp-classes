export default interface IChaceProvider {
  save(key: string, value: string): Promise<void>;

  recover(key: string): Promise<string | null>;

  invalidate(key: string): Promise<void>;
}
