export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([ukDownload, frDownload])
    .then((res) => res);
}
