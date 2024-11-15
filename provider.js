async function scheduleHtmlProvider() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const token = getCookie("Authorization");
  const ref = window.location.href;
  const batchId = ref.match(/batchId=(\w+)/)[1];
  const res = await fetch("https://jwxk.shu.edu.cn/xsxk/elective/shu/xskb", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      authorization: token,
      batchid: batchId,
    },
    referrer: ref,
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "",
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  const data = await res.json();
  return JSON.stringify(data.data);
}
