package com.hotelreserva.reserva_hotel.service;

import com.hotelreserva.reserva_hotel.model.Message;
import com.hotelreserva.reserva_hotel.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    public Message guardar(Message message) {
        return repository.save(message);
    }

    public List<Message> listar() {
        return repository.findAll();
    }
}
