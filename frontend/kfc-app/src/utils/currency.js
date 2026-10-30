const INR_TO_UGX_RATE = 45.69;

export const parseInrAmount = (value) => {
  const amount = Number(String(value ?? 0).replace(/[^\d.-]/g, ""));
  return Number.isFinite(amount) ? amount : 0;
};

export const toUgx = (inrAmount) =>
  Math.round(parseInrAmount(inrAmount) * INR_TO_UGX_RATE);

export const formatUgx = (inrAmount) =>
  `UGX ${toUgx(inrAmount).toLocaleString("en-UG")}`;

export const convertInrTextToUgx = (text = "") =>
  text.replace(/\bRs\.?\s*([\d,]+(?:\.\d+)?)/gi, (_, amount) =>
    formatUgx(amount.replace(/,/g, ""))
  );