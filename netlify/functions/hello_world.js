exports.handler = async () => {
  const mySecret = process.env.SECRET_WORD;
  return {
    statusCode: 200,
    body: `hello world! I have a ${mySecret}`
  };
};
