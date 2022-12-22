export default function loadBalancer(ukDownload, frDownload) {
  return Promise
    .race([ukDownload, frDownload])
    .then((res) => res);
}
