package main;

public interface DataAccess{
    int MAX_REGISTRO = 10;
    
    void insert();
    
    void list();
    
    void update(); 
    
    void delete();
}