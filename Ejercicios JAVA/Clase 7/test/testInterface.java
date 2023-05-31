package test;
import main.*;

public class testInterface{
    public static void main(String[] args) {
        DataAccess dataAcc = new DataAccess();
        dataAcc.List();
        DataAccess dataSql = new addMsql();
        dataSql.List();
        DataAccess dataOrc = new addOracle();
        print(dataOrc);
    }
    public static void print(DataAccess data){
        data.list();
    }
}