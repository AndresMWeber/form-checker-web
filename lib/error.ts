export const returnError = (error: unknown): string => {
  console.error(error);
  let result: string = "";
  if (typeof error === "string") {
    result = error.toUpperCase();
  } else if (error instanceof Error) {
    result = error.message;
  }
  return result;
};
