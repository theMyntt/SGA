export default function CheckLocalStorage(): void {
  if (window.localStorage.length == 0) {
    location.href = "/";
  }
}
