import { Stage, Construct, StageProps } from "@aws-cdk/core";

//***********Import te resource stack***********
import { CarmaTechPipelineStack } from "./carma-tech-pipeline-stack";

export class CarmaTechPipelineStage extends Stage {
	constructor(scope: Construct, id: string, props?: StageProps) {
		super(scope, id, props);

		//***********Instantiate the resource stack***********
		new CarmaTechPipelineStack(this, `CarmaTechPipelineStack`);
	}
}