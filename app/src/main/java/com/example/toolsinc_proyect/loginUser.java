package com.example.toolsinc_proyect;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class loginUser extends AppCompatActivity {

    private EditText emailInput, passwordInput;
    private Button loginButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_user);

        // Obtener referencias a los elementos de la vista
        emailInput = findViewById(R.id.email_input);
        passwordInput = findViewById(R.id.password_input);
        loginButton = findViewById(R.id.my_button);

        // Configurar el listener del botón de login
        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String email = emailInput.getText().toString().trim();
                String password = passwordInput.getText().toString().trim();

                if (email.isEmpty() || password.isEmpty()) {
                    // Mostrar un mensaje de error indicando que los campos son obligatorios
                    Toast.makeText(loginUser.this, "Debe llenar todos los campos", Toast.LENGTH_SHORT).show();
                } else if (!isValidEmail(email)) {
                    // Mostrar un mensaje de error indicando que el correo electrónico no es válido
                    Toast.makeText(loginUser.this, "Ingrese un correo electrónico válido", Toast.LENGTH_SHORT).show();
                } else if (!isValidPassword(password)) {
                    // Mostrar un mensaje de error indicando que la contraseña no es válida
                    Toast.makeText(loginUser.this, "La contraseña debe tener al menos 6 caracteres", Toast.LENGTH_SHORT).show();
                } else {
                    // Iniciar sesión correctamente y pasar a la siguiente pantalla
                    Intent intent = new Intent(loginUser.this, MainActivity.class);
                    startActivity(intent);
                    finish();
                }
            }
        });
    }

    private boolean isValidEmail(String email) {
        // Validar si el correo electrónico tiene un formato válido
        return Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }

    private boolean isValidPassword(String password) {
        // Validar si la contraseña tiene al menos 6 caracteres
        return password.length() >= 6;
    }
}


