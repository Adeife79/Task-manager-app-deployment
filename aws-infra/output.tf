output "todo_public_ip" {
    value = aws_instance.ec2.public_ip
}