import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DefaultInstanceTenancy } from 'aws-cdk-lib/aws-ec2';
import * as ec2 from 'aws-cdk-lib/aws-ec2'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkTestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
        /**
     * VPC LambdaFunctionUrlsVpc
     */
    // const vpc = new ec2.Vpc(this, 'HandsonVpc', { cidr: '10.10.0.0/16' });
    const vpc = new ec2.Vpc(this, 'HandsonVpc', {
    vpcName: '01997041-handson',
    cidr : '10.10.0.0/16',
    defaultInstanceTenancy: DefaultInstanceTenancy.DEFAULT,
    enableDnsSupport: true,
    enableDnsHostnames: true,
    subnetConfiguration: [
      { cidrMask: 24, name: 'Public-Subnet-1a', subnetType: ec2.SubnetType.PUBLIC },
      { cidrMask: 24, name: 'Public-Subnet-1c', subnetType: ec2.SubnetType.PUBLIC },
      { cidrMask: 24, name: 'Private-Subnet-1a', subnetType: ec2.SubnetType.PRIVATE_ISOLATED},
      { cidrMask: 24, name: 'Private-Subnet-1c', subnetType: ec2.SubnetType.PRIVATE_ISOLATED},
      // { cidrMask: 24, name: 'Private-Subnet-1c', subnetType: ec2.SubnetType.PRIVATE_WITH_NAT},
    ]
  });
    
  }
}
