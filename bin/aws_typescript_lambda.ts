#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsTypescriptLambdaStack } from '../lib/aws_typescript_lambda-stack';

const app = new cdk.App();
new AwsTypescriptLambdaStack(app, 'AwsTypescriptLambdaStack');
