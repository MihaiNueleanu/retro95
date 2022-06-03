import dotenv from 'dotenv';
dotenv.config();

export type Appsettings = {
	SOCKET_URL: string;
};

export async function get(): Promise<{ body: Appsettings }> {
	return {
		body: {
			SOCKET_URL: process.env['SOCKET_URL'] || ''
		}
	};
}
