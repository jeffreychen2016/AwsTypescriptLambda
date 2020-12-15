import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
// import * as R from "Ramda";
// https://levelup.gitconnected.com/how-to-use-typescript-for-aws-lambda-in-3-steps-1996243547eb
export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const queries = JSON.stringify(event.queryStringParameters);

  //   const { identity } = R;
  //   R.map(identity, [1, 2, 3]);

  return {
    statusCode: 200,
    body: `Queries: ${queries}`,
  };
};
