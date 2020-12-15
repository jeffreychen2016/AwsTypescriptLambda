import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from "path";

export class AwsTypescriptLambdaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const layer = new lambda.LayerVersion(this, "TestLayer", {
    //   code: lambda.Code.fromAsset(path.join(__dirname, "layer")),
    // });

    const fn = new lambda.Function(this, "TestLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "test_lambda.lambdaHandler",
      code: lambda.Code.fromAsset(path.join(__dirname, "..", "built", "")),
      // layers: [layer],
    });
  }
}
