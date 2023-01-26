import { Stage, Construct, StageProps } from "@aws-cdk/core";

//***********Import te resource stack***********
import { CdkPipelinesCarmaStack } from "./cdk-pipelines-carma-stack";

export class CdkCarmaTechPipelineStage extends Stage {
	constructor(scope: Construct, id: string, props?: StageProps) {
		super(scope, id, props);

		//***********Instantiate the resource stack***********
		new CdkPipelinesCarmaStack(this, `CdkPipelinesCarmaStack`);
	}
}