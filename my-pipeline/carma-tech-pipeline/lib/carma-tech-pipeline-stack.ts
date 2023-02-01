import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class CarmaTechPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'CarmaTechPipeline', {
      pipelineName: 'CarmaTechPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('abdullah5abid/carma-tech-infra', 'cdk-carma-tech-pipeline'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}