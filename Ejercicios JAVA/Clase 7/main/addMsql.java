package main;

public class addMsql implements DataAccess{
    @Override
    public void insert() {
        System.out.println("Insert from MySQL");
    }
    @Override
    public void list() {
        System.out.println("List from MySQL");
    }
    @Override
    public void update() {
        System.out.println("Update from MySQL");
    }
    @Override
    public void delete() {
       System.out.println("Delete from MySQL");
    }
    
}