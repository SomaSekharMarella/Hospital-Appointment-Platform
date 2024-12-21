# Doctor Appointment Website

This project is a frontend-only web application for booking medical appointments. It is inspired by MediBuddy and Lybrate, with additional features that make it easier for users to find and book doctors based on their location and specific diseases. The application is built using the MERN stack, but this version focuses only on the React-based frontend.

## Features

### Homepage:
- Contains a simple interface with a "Book Appointment" button to start the process.

### Location Selection:
- Users can select their location from a dropdown or list.

### Disease Categories:
- After selecting a location, users see a categorized list of diseases.

### Doctors List:
- Clicking on a disease displays a list of available doctors for that disease in the selected location.

### Scalable Design:
- Each disease is managed in a separate file, making it easy to add new diseases and doctors without modifying the entire codebase.

## Tech Stack

- **Frontend:** React (with Vite for development)
- **Styling:** CSS (organized into modular stylesheets)

## Project Structure

```
src/
├── components/
│   ├── DoctorList.jsx         # Displays the list of doctors for a selected disease
│   ├── DiseaseList.jsx        # Displays the list of diseases
│   ├── LocationSelector.jsx   # Allows users to select their location
│   ├── Header.jsx             # The main header component
│   ├── Footer.jsx             # The footer component
├── pages/
│   ├── HomePage.jsx           # The homepage of the application
│   ├── AppointmentPage.jsx    # The page for managing appointments
├── styles/
│   ├── common.css             # Global CSS styles
│   ├── header.css             # Header-specific styles
│   ├── footer.css             # Footer-specific styles
├── App.jsx                    # Main React component
├── main.jsx                   # Entry point of the application
```

## How to Run the Project Locally

### Prerequisites
- Node.js installed
- Git installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/doctor-appointment.git
   ```

2. Navigate to the project folder:

   ```bash
   cd doctor-appointment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

## Future Enhancements

- Integrate backend for user authentication and data storage using Node.js and MongoDB.
- Add a feature to display doctor's availability and appointment timings.
- Improve UI/UX with advanced styling libraries (e.g., Material-UI or Tailwind CSS).
- Implement form validation for booking appointments.

## Screenshots

- **Homepage:**
- **Location Selector:**
- **Doctors List:**

## License

This project is open-source and available under the MIT License. Feel free to contribute and enhance the project!

## Feedback

If you have suggestions or encounter issues, feel free to open an issue or contact me at [2300030411@kluniversity.in].
