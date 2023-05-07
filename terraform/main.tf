terraform {

}

provider "aws" {
  version = "~> 3.66"
  region  = "us-west-2"

  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}