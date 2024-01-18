import { getTitle } from "$lib/utilsYoutube";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "../$types";

export const GET: RequestHandler = async ({url}) => {
    const ytlink = url.searchParams.get('url');
    const res = await getTitle(String(ytlink));
    return json(res);
}