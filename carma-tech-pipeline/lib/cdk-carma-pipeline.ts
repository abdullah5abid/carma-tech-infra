import * as cdk from "@aws-cdk/core";
import {
	CodeBuildStep,
	CodePipeline,
	CodePipelineSource
} from "@aws-cdk/pipelines";

//***********Import the pipeline stage***********
import { CarmaTechPipelineStage } from "./carma-tech-pipeline-stage";

export class CdkCarmaPipeline extends cdk.Stack {
	constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const pipeline = new CodePipeline(this, "CarmaTechPipeline", {
			//***********Change the name of the pipeline***********
			pipelineName: "CarmaTechPipelineChanged",

			synth: new CodeBuildStep("SynthStep", {
				input: CodePipelineSource.gitHub(
					"abdullah5abid/carma-tech-infra",
					"carma-tech-pipeline",
					// {
					// 	connectionArn: "arn:aws:codestar-connections:us-east-1:395929101814:connection/a309133b-9334-4a3c-a482-4329599d7ad8"
					// }
				),
				installCommands: ["npm install -g aws-cdk"],
				commands: ["npm ci", "npm run build", "npx cdk synth"]
			})
		});

		//***********Instantiate the stage and add it to the pipeline***********
		const deploy = new CarmaTechPipelineStage(this, "Deploy");
		pipeline.addStage(deploy);
	}
}