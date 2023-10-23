export const getDirsFromUrl = () => {
  const currentUrl = window.location.pathname

  return currentUrl.split('/').filter(item => item != '')
}
