# Diamond-Price-Prediction
Link: http://ec2-3-145-206-90.us-east-2.compute.amazonaws.com/

### Overview
The Diamond Price Prediction project is a web application developed to predict the price of diamonds based on various features. The application utilizes a machine learning model trained on historical diamond data to provide accurate price estimations. The model is integrated into a web interface, allowing users to input diamond characteristics and receive real-time price predictions.

### Technologies Used
- **Programming Languages:** Python, JavaScript, HTML, CSS
- **Frameworks/Libraries:** Flask (Python)
- **Machine Learning Libraries:** Scikit-Learn, Pandas, NumPy
- **Web Server:** Nginx
- **Cloud Platform:** Amazon Web Services (AWS)
- **Deployment:** Amazon EC2 (Elastic Compute Cloud)

### Project Details
#### Machine Learning Model
The heart of the application is a machine learning model trained on a dataset containing various attributes of diamonds, such as carat weight, cut, color, clarity, and depth. The model, implemented using Python and Scikit-Learn, is trained to predict the price of diamonds based on these features. After training, the model is serialized and saved to a pickle file for easy integration with the web application.

#### **Hyper Parameter Tuning**
Hyperparameter tuning was employed to optimize the performance of the machine learning model. After thorough experimentation, the DecisionTreeRegressor was selected as the best model, utilizing the optimal hyperparameters identified through the tuning process. This approach ensured that the model achieved maximum accuracy and robustness in predicting diamond prices.

#### Web Application
The web application is built using Flask, a lightweight Python web framework, to provide the backend functionality. Flask routes handle user requests, passing input data to the machine learning model for prediction. The frontend interface is designed using HTML, CSS, and JavaScript.

#### AWS Deployment
The entire application is deployed on Amazon EC2, a scalable cloud computing platform offered by AWS. An EC2 instance hosts the web server, with Nginx configured as the web server software to serve static files and proxy requests to the Flask application. The machine learning model, along with the Flask backend, is deployed on the EC2 instance, allowing the application to run in a production environment.

### Deployment Steps
1. **EC2 Instance Setup**: Launch an EC2 instance with the desired specifications and security settings.
2. **Web Server Configuration**: Install and configure Nginx on the EC2 instance to serve as the web server.
3. **Application Deployment**: Transfer the Flask application files, including the machine learning model pickle file, to the EC2 instance.
4. **Dependencies Installation**: Install necessary dependencies and packages on the EC2 instance, including Python libraries and Flask.
5. **Start Application**: Run the Flask application on the EC2 instance, ensuring that it listens on the appropriate port.
6. **Access Web Application**: Access the deployed web application through the public IP address or domain name associated with the EC2 instance.
