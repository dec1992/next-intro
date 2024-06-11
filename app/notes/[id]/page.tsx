import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 10,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getNote(noteId: string) {
    const db = new PocketBase('http://127.0.0.1:8090');
    const result = await db.collection('notes').getOne(noteId);
    return result
}

export default async function NotePage({ params }: any) {
    const result = await getNote(params.id)
    return (
        <div>
            <h1>notes/{result.id}</h1>
            <div>
                <h3>{result.title}</h3>
                <h3>{result.content}</h3>
                <p>{result.created}</p>
            </div>
        </div>
    )
}