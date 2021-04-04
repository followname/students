import React, { Component } from 'react';

import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class FormModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onSubmit = e => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Button onClick={this.toggle}>
                    Добавить запись
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Добавление записи о студенте</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input type="text" placeholder="Фамилия"/>
                                <Input type="text" placeholder="Имя"/>
                                <Input type="text" placeholder="Отчество"/>
                                <Input type="date" placeholder="Дата рождения"/>
                                <Label>Оценки по предметам</Label>
                                <Input type="Number" placeholder="Математика"/>
                                <Input type="Number" placeholder="Философия"/>
                                <Input type="Number" placeholder="Русский"/>
                                <Input type="Number" placeholder="Английский"/>
                                <Input type="Number" placeholder="Китайский"/>
                                <Button>Добавить</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};


export default FormModal;