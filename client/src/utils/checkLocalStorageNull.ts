export default function CheckLocalStorage(): void {
  if (window.localStorage.length == 1) {
    location.href = "/";
  }
}
