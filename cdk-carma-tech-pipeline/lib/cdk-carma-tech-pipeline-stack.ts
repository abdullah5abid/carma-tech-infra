import * as cdk from "@aws-cdk/core";
import {
	CodeBuildStep,
	CodePipeline,
	CodePipelineSource
} from "@aws-cdk/pipelines";

import {CdkCarmaTechPipelineStage} from "./cdk-carma-tech-pipeline-stage";

export class CdkCarmaTechPipelineStack extends cdk.Stack {
	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const pipeline = new CodePipeline(this, "CarmaTechPipeline", {
			pipelineName: "BlogPipeline",
			synth: new CodeBuildStep("SynthStep", {
				input: CodePipelineSource.connection(
					"abdullah5abid/carma-tech-infra",
					"main",
					{
						connectionArn:
							"ARN OF THE CODESTAR CONNECTION MADE EARLIER"
					}
				),
				installCommands: ["npm install -g aws-cdk"],
				commands: ["npm ci", "npm run build", "npx cdk synth"]
			})
		});

		const deploy = new CdkCarmaTechPipelineStage(this, "Deploy");
		pipeline.addStage(deploy);
	}
}
