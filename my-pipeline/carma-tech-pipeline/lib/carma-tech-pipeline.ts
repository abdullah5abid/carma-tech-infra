#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CarmaTechPipelineStack } from '../lib/carma-tech-pipeline-stack';

const app = new cdk.App();
new CarmaTechPipelineStack(app, 'CarmaTechPipelineStack', {
  env: {
    account: '395929101814',
    region: 'us-east-2',
  }
});

app.synth();
