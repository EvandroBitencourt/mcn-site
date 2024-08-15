export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66b80fc9bebd376c873dabfb?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json()

    } catch (error) {
        throw new Error("Failed to fetch data")
    }

}

export async function getDataBlog() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22noticias%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json()

    } catch (error) {
        throw new Error("Failed to fetch data")
    }

}

export async function getItemBySlug(slug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: slug
        }),
        props: 'slug, title, content, metadata,published_at',
        read_key: process.env.READ_KEY as string
    })

    const url = `${baseUrl}?${queryParams.toString()}`

    try {
        const res = await fetch(url, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Failed get item by slug")
        }

        return res.json()

    } catch (error) {
        throw new Error("Failed get item by slug")
    }

}



