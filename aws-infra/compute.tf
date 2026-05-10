resource "aws_instance" "ec2" {
    ami = var.ec2_ami
    instance_type = "t3.small"
    subnet_id = aws_subnet.public_subnet.id
    security_groups = [aws_security_group.sg.id]

    key_name = "demo-ssh-key"

    tags = {
        Name = "todo-instance"
    }
}