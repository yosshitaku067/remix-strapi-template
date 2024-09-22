export const singleton = <Value>(
	name: string,
	valueFactory: () => Value,
): Value => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const g = global as any;
	g.__singletons ??= {};
	g.__singletons[name] ??= valueFactory();
	return g.__singletons[name];
};
