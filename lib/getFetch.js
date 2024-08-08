export default async function getFetch(url) {
  try {
    const fetchReault = await fetch(url, {
      method: "GET",
      next: { revalidate: 5000 },
    }).then((res) => {
      return res.json();
    });
    return fetchReault;
  } catch (error) {
    console.log(error);
  }
}
