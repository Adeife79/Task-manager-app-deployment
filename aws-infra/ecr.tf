resource "aws_ecr_repository" "client_repo" {
    name = var.client_ecr_repo_name 
    image_tag_mutability = "MUTABLE"

    image_scanning_configuration {
        scan_on_push = true
    }

    encryption_configuration {
        encryption_type = "AES256"
    }
}

resource "aws_ecr_repository" "backend_repo" {
    name = var.backend_ecr_repo_name 
    image_tag_mutability = "MUTABLE"

    image_scanning_configuration {
        scan_on_push = true
    }

    encryption_configuration {
        encryption_type = "AES256"
    }
}