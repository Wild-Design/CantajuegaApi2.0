# CantajuegaApi2.0

Endpoints que deben quedar y sus respectivas respuestas:

# /api/user

- Peticion GET : array de :

         {
                "id": "b841ee99-bdc0-45eb-b116-6f572e1c08cf",
            "firstName": "Juan",
            "lastName": "Perez",
            "email": "Test@gmail.com",
            "phone": "1234567890",
            "emailVerified": false,
            "password": "$2b$10$agaHlOFmVP/jA2yClEmie.pCNXkFzQl3n/8pOh8i0mv1FYFDcMNE.",
            "recurrenteId": null,
            "child": {
                "id": "67589494-26f4-493a-be37-5ba67e97229f",
                "firstName": "Juan",
                "lastName": "Perez",
                "gender": "Male",
                "birthDate": "2020-01-01",
                "age": 43
            }
        }

# /api/membership

- GET, array de :

                {
                    "id": "90020b6e-c75b-4ec5-957f-5d868e6d59c6",
                    "duration": 1,
                    "price": 49.99,
                    "description": "⦁\tTodas las herramientas terapéuticas para niñas y niños de 0 a 6 años",
                    "name": "Mensual",
                    "therapeuticTools": true,
                    "music": true,
                    "videos": true,
                    "recurrenteId": "prod_6sl3mnqq",
                    "status": "active"
                }

# /api/child
            {
                    "id": "67589494-26f4-493a-be37-5ba67e97229f",
                    "firstName": "Juan",
                    "lastName": "Perez",
                    "gender": "Male",
                    "birthDate": "2020-01-01",
                    "age": 43,
                    "user": {
                        "id": "b841ee99-bdc0-45eb-b116-6f572e1c08cf",
                        "firstName": "Juan",
                        "lastName": "Perez",
                        "email": "Test@gmail.com",
                        "phone": "1234567890",
                        "emailVerified": false,
                        "password": "$2b$10$agaHlOFmVP/jA2yClEmie.pCNXkFzQl3n/8pOh8i0mv1FYFDcMNE.",
                        "recurrenteId": null
                    },
                    "stage": {
                        "id": "41876bca-c7d0-4810-adfc-c86ecfee30a0",
                        "name": "Stage 6",
                        "description": "36-48 months",
                        "minAge": 36,
                        "maxAge": 48
                    }
            }


# /api/stage

        {
            "id": "41876bca-c7d0-4810-adfc-c86ecfee30a0",
            "name": "Stage 6",
            "description": "36-48 months",
            "minAge": 36,
            "maxAge": 48,
            "child": [
                {
                "id": "67589494-26f4-493a-be37-5ba67e97229f",
                "firstName": "Juan",
                "lastName": "Perez",
                "gender": "Male",
                "birthDate": "2020-01-01",
                "age": 43
                }
            ]
        }
