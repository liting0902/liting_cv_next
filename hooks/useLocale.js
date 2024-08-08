import { useParams } from "next/navigation";
function useLocale() {
  const params = useParams();
  const { locale } = params;
  return { locale };
}
export default useLocale;
