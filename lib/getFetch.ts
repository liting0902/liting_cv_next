export default async (url: string): Promise<{} | void> => {
  try {
    const fetchReault = await fetch(url, {
      method: 'GET',
    }).then((res) => res.json())
    return fetchReault
  } catch (error) {
    console.log(error)
  }
}
