import classNames from "classnames";
import { ERROR_MESSAGE } from "consts/error-message";
import get from "lodash/get";
import isString from "lodash/isString";
import { twMerge } from "tailwind-merge";

export const getErrorMessage = (response: any, message = "") => {
  if (isString(response)) return response;
  const errorMessage = get(response, "data.code", 3);
  const translatedMessage = ERROR_MESSAGE?.[errorMessage] || ERROR_MESSAGE[3];
  return message || translatedMessage || errorMessage;
};

export const convertBreakToHtml = (text: string) => {
  return text && text.replace(/\r?\n/g, "<br/>");
};

export function cn(...inputs: any[]) {
  return twMerge(classNames(inputs));
}
