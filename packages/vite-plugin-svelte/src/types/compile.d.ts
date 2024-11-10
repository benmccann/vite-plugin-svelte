import type { Processed, CompileResult, Warning } from 'svelte/compiler';
import type { SvelteRequest } from './id.d.ts';
import type { ResolvedOptions } from './options.d.ts';

export type PreprocessSvelte = (
	svelteRequest: SvelteRequest,
	code: string,
	options: Partial<ResolvedOptions>
) => Promise<PreprocessData>;

export type CompileSvelte = (
	svelteRequest: SvelteRequest,
	code: string,
	preprocessResult: PreprocessData,
	options: Partial<ResolvedOptions>
) => Promise<CompileData>;

export interface Code {
	code: string;
	map?: any;
	dependencies?: any[];
}

export interface PreprocessData {
	code: string;
	warnings: Warning[];
	dependencies: string[];
	preprocessed: Processed | undefined;
}

export interface CompileData {
	filename: string;
	normalizedFilename: string;
	lang: string;
	compiled: CompileResult;
	ssr: boolean | undefined;
	dependencies: string[];
	preprocessed: Processed;
}
