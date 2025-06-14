const validateAppointment = ({date, time}) =>{
    const errors = {};

    if (!date) {
        errors.date = "La fecha es requerida";
    } else {
        const today = new Date();
        const selectedDate = new Date(date);
        if (selectedDate <= today) {
            errors.date = "La fecha no puede ser anterior a hoy y debe ser un dia hábil";
        }
    }

    if (!time) {
        errors.time = "La hora es requerida";
    } else {
        const [hours, minutes] = time.split(":").map(Number);
        if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
            errors.time = "La hora debe estar entre las 09:00 y las 17:00";
        }
    }

    return errors;

}

export default validateAppointment;