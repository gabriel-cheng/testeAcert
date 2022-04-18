package backendacert.backendacert.controler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    // Path variable é responsavel por fazer referência á palavra "codigo" contida em @GetMapping
    // Basicamente
    @GetMapping(path = "/api/usuario/{codigo}")
    public ResponseEntity consultar(@PathVariable("codigo") String codigo) {
        return null;
    }
}
