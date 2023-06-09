package dataImportExport;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class ClientIO extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{
        Parent root = FXMLLoader.load(getClass().getResource("GUI.fxml"));
        primaryStage.setTitle("client");
        primaryStage.setMinHeight(600);
        primaryStage.setMinWidth(620);
        primaryStage.setScene(new Scene(root, 620, 600));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}