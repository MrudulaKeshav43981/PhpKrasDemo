<?php


if (isset($_GET['surveyData'])) {
    select();
}

function select()
{
    //echo "The select function is called.";
    $con = @mysqli_connect('localhost', 'root', '77@Jaiganpathi', 'TESTDB');
    
    if (! $con) {
        echo "Error: " . mysqli_connect_error();
        exit();
    }
    //echo 'Connected to MySQL';
    //echo nl2br("\n");
    
    // Some Query
    $sql = 'SELECT * FROM TESTDB.student';
    $query = mysqli_query($con, $sql);
    $rows = array();
    while ($row = mysqli_fetch_array($query)) {
        $rows[] = $row;
    }
    
    header('Content-type: application/json');
    echo json_encode($rows);
    
    // Close connection
    mysqli_close($con);
    exit();
}

function insert($json)
{
    $conn = @mysqli_connect('localhost', 'root', '77@Jaiganpathi', 'TESTDB');
    
    if(! $conn ) {
        die('Could not connect: ' . mysql_error());
    }
    
    
    $data = json_decode($json, TRUE);
        
    $sql = 'INSERT INTO TESTDB.student '.
        '(emp_name,emp_address, emp_salary, join_date) '.
        'VALUES ( '.
        $data->firstName.', '.
        $data->email.', '.
        $data->streetAddress.','.
        $data->telphoneNumber.','.
        $data->comments
        .')';
    
    mysql_select_db('test_db');
    $retval = mysql_query( $sql, $conn );
    
    if(! $retval ) {
        die('Could not enter data: ' . mysql_error());
    }
    
    echo "Entered data successfully\n";
    
    mysql_close($conn);
    
    exit();
}
?>