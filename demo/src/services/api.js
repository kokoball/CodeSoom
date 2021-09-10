export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  // TODO: fetch GET /categories(여러개) /categories/13 (단수형)
  // REST - CRUD => Read - collection(복수형) / member, element(개별)
  return data;
}
export function xxx() {

}
