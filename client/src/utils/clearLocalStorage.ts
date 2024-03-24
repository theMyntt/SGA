export default function ClearLocalStorage(): boolean {
  window.localStorage.clear();
  return true;
}