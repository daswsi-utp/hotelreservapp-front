package com.hotelreserva.reserva_hotel.controller;

import com.hotelreserva.reserva_hotel.model.Message;
import com.hotelreserva.reserva_hotel.service.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Message> enviarMensaje(@RequestBody Message message) {
        return ResponseEntity.ok(service.guardar(message));
    }

    @GetMapping
    public ResponseEntity<List<Message>> listarMensajes() {
        return ResponseEntity.ok(service.listar());
    }
}
