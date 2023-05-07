resource "aws_cloudwatch_event_rule" "daily_lambda_trigger" {
  name        = "daily_lambda_trigger"
  description = "Trigger the Lambda function once a day"

  schedule_expression = "rate(1 day)"
}

resource "aws_cloudwatch_event_target" "daily_lambda_target" {
  rule      = aws_cloudwatch_event_rule.daily_lambda_trigger.name
  target_id = "daily_lambda_target"
  arn       = aws_lambda_function.lambda_function.arn
}